#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub lineEncoding {
    my ($s) = @_;

    my @result;
    my @store = split('', $s);
    my $c = 1;

    for (my $i = 1; @store > $i; ++$i) {
        if (ord($store[$i - 1]) - ord($store[$i])) {
            if (1 < $c) {
                push(@result, $c);
                $c = 1;
            }
            push(@result, $store[$i - 1]);
        } else {
            ++$c;
        }
    }

    if (1 < $c) {
        push(@result, $c);
    }

    push(@result, $store[@store - 1]);

    return join('', @result);
}
