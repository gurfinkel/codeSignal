#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub onlyEvenNumbers {
    my ($left, $right) = @_;
    my @result;

    for (my $i = $left; $right >= $i; ++$i) {
        unless ($i & 1) {
            push(@result, $i);
        }
    }

    return \@result;
}
