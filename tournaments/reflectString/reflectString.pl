#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub reflectString {
    my ($inputString) = @_;

    my @result;
    my @store = split('', $inputString);

    for (my $i = 0; @store > $i; ++$i) {
        push(@result, chr(ord('z') - ord($store[$i]) + ord('a')));
    }

    return join('', @result);
}
