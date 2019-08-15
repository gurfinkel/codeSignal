#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isDivisibleBy6 {
    my ($inputString) = @_;

    my @result;

    for (my $i = 0; 10 > $i; ++$i) {
        my $c = $inputString;
        $c =~ s/([*])/ $i/ge;
        unless (int($c) % 6) {
            push(@result, $c);
        }
    }

    return \@result;
}
